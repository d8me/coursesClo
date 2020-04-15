from django.db import models
from decimal import Decimal

class Course(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal('0'))

    def __unicode__(self):
        return self.name