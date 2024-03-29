from settings.db import Base
from sqlalchemy import Column, ForeignKey, String, Integer, Text, DateTime
from sqlalchemy.orm import relationship

class Category(Base):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    title = Column(String)
    urls = Column(String, unique=True)
