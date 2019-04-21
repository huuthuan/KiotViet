from django.db import models

def increment_product_code_number():
    last_product = Product.objects.all().order_by('id').last()
    if not last_product:
        return 'MH0001'
    product_code = last_product.product_code
    product_int = int(product_code.split('MH')[-1])
    width = 4
    new_product_int = product_int + 1
    formatted = (width - len(str(new_product_int))) * "0" + str(new_product_int)
    new_product_no = 'MH' + str(formatted)
    return new_product_no

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
    product_code = models.CharField(max_length = 20, default = increment_product_code_number, null = True, blank = True)
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

