from settings.db import Base
from sqlalchemy import Column, ForeignKey, String, Integer, Text, DateTime
from sqlalchemy.orm import relationship

class Product(Base):
    __tablename__ = "Product"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    title = Column(String)
    image = Column(String)
    description = Column(String)
    date = Column(DateTime)
    price = Column(Integer)
    city = Column(String)
    urls = Column(String, unique=True)
    category = Column(Integer, ForeignKey("category.id"))
    user = Column(Integer, ForeignKey("user.id"))
    user_id = relationship("User")

