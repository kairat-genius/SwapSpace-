
from settings.base import *
from sqlalchemy import Column, ForeignKey, String, Integer, Text, DateTime
from sqlalchemy.orm import relationship
from project.models.tag.tag import product_tag_association

class Product(Base):
    __tablename__ = "Product"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    title = Column(String)
    image = Column(String)
    description = Column(Text)
    date = Column(DateTime)
    price = Column(Integer)
    city = Column(String)
    urls = Column(String, unique=True)
    phone = Column(String)
    category_id = relationship("Category")
    category = Column(Integer, ForeignKey("category.id"))

    user_id = relationship("User")
    user = Column(Integer, ForeignKey("user.id"))

    tags = relationship("Tag", secondary=product_tag_association, back_populates="products")


