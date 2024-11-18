"""Initial migration

Revision ID: 84ac9affdec6
Revises: 
Create Date: 2024-11-18 10:16:40.553014

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '84ac9affdec6'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('department',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('hierarchy_level', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('role', sa.String(length=50), nullable=False),
    sa.Column('department_id', sa.Integer(), nullable=True),
    sa.Column('contact', sa.String(length=50), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['department_id'], ['department.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('notification',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('message', sa.String(length=200), nullable=False),
    sa.Column('send_date', sa.DateTime(), nullable=False),
    sa.Column('recipient_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recipient_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('notification')
    op.drop_table('user')
    op.drop_table('department')
    # ### end Alembic commands ###