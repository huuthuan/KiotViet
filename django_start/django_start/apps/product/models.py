from django.db import models

class CategoryManager(models.Manager):
    def remove_category(self, category):
        has_sub_categories = self.filter(parent__id=category.id)
        if has_sub_categories:
            raise Exception('Cannot delete category has sub categories.')
        category.delete()

class Category(models.Model):
    name = models.CharField(max_length=255)
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children', on_delete=True)

    objects = CategoryManager()

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    price_cost = models.IntegerField(null=True)
    price_sale = models.IntegerField(null=True)
    on_hand = models.IntegerField()
    min_quantity = models.IntegerField(null=True)
    max_quantity = models.IntegerField(null=True)
    describe = models.CharField(null=True, max_length=255)
    comment = models.CharField(null=True, max_length=255)
    allows_sale =models.BooleanField(default=True, null= True)

class ImageProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, related_name='images')
    url = models.ImageField(null=True, blank=True)
    is_avatar = models.BooleanField(default=True)

