from sqlalchemy import Column, Boolean, String, Integer, DateTime

from fastapi_users.db import SQLAlchemyBaseUserTable

from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base

Base = declarative_base()
class User(SQLAlchemyBaseUserTable, Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True, unique=True)

