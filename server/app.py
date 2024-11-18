from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from datetime import datetime
from flask_migrate import Migrate
from flask_cors import CORS


# Initialize Flask app and extensions
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hr_system.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)
CORS(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), nullable=False)  # Admin, HR, or Employee
    department_id = db.Column(db.Integer, db.ForeignKey('department.id'))
    contact = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def set_password(self, raw_password):
        self.password = bcrypt.generate_password_hash(raw_password).decode('utf-8')

    def check_password(self, raw_password):
        return bcrypt.check_password_hash(self.password, raw_password)

class Department(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    hierarchy_level = db.Column(db.Integer, nullable=False)
    users = db.relationship('User', backref='department', lazy=True)

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(200), nullable=False)
    send_date = db.Column(db.DateTime, nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    recipient = db.relationship('User', backref=db.backref('notification',lazy=True))


@app.route('/auth/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400

    new_user = User(
        name=data['name'],
        email=data['email'],
        role=data['role'],
        department_id=data.get('department_id'),
        contact=data.get('contact')
    )
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/auth/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['password']):
        token = create_access_token(identity={'id': user.id, 'role': user.role})
        return jsonify({'token': token}), 200
    return jsonify({'error': 'Invalid credentials'}), 401

## Employee Routes
@app.route('/employees', methods=['GET'])
def get_employees():
    employees = User.query.filter_by(role='Employee').all()
    return jsonify([{
        'id': emp.id,
        'name': emp.name,
        'email': emp.email,
        'department': emp.department.name if emp.department else None,
        'contact': emp.contact
    } for emp in employees]), 200

@app.route('/employees/<int:id>', methods=['GET'])
def get_employee(id):
    employee = User.query.get_or_404(id)
    return jsonify({
        'id': employee.id,
        'name': employee.name,
        'email': employee.email,
        'role': employee.role,
        'department': employee.department.name if employee.department else None,
        'contact': employee.contact
    }), 200

@app.route('/employees', methods=['POST'])
# @jwt_required()
def add_employee():
    data = request.json
    new_employee = User(
        name=data['name'],
        email=data['email'],
        role='Employee',
        department_id=data.get('department_id'),
        contact=data.get('contact')
    )
    new_employee.set_password(data['password'])
    db.session.add(new_employee)
    db.session.commit()
    return jsonify({'message': 'Employee added successfully'}), 201

@app.route('/employees/<int:id>', methods=['PUT'])
# @jwt_required()
def update_employee(id):
    data = request.json
    employee = User.query.get_or_404(id)
    employee.name = data['name']
    employee.department_id = data.get('department_id')
    employee.contact = data.get('contact')
    db.session.commit()
    return jsonify({'message': 'Employee updated successfully'}), 200

@app.route('/employees/<int:id>', methods=['DELETE'])
# @jwt_required()
def delete_employee(id):
    employee = User.query.get_or_404(id)
    db.session.delete(employee)
    db.session.commit()
    return jsonify({'message': 'Employee deleted successfully'}), 200

## Notification Routes
@app.route('/notifications', methods=['GET'])
def get_notifications():
    notifications = Notification.query.all()
    for n in notifications:
        print(f"Notification: {n}, Recipient: {n.recipient}")
    return jsonify([{
        'id': n.id,
        'message': n.message,
        'send_date': n.send_date,
        'recipient': n.recipient.name if n.recipient else "No recipient"
    } for n in notifications]), 200


@app.route('/notifications', methods=['POST'])
# @jwt_required()
def create_notification():
    data = request.json
    new_notification = Notification(
        message=data['message'],
        send_date=datetime.strptime(data['send_date'], '%Y-%m-%d'),
        recipient_id=data['recipient_id']
    )
    db.session.add(new_notification)
    db.session.commit()
    return jsonify({'message': 'Notification created successfully'}), 201

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Ensure tables are created
    app.run(debug=True)
