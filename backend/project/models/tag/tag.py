from settings.db import Base
from sqlalchemy import Column, ForeignKey, String, Integer, Text, DateTime, Table
from sqlalchemy.orm import relationship



product_tag_association = Table('product_tag_association', Base.metadata,
                                Column('product_id', Integer, ForeignKey('Product.id')),
                                Column('tag_id', Integer, ForeignKey('Tag.id'))
                                )
class Tag(Base):
    __tablename__ = "Tag"
    id = Column(Integer, primary_key=True, index=True, unique=True)
    title = Column(String)
    urls = Column(String, unique=True)

    # Определяем обратное отношение для продуктов через промежуточную таблицу
    products = relationship("Product", secondary=product_tag_association, back_populates="tags")