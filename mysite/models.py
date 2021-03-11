from django.db import models


class People(models.Model):
    name = models.CharField(max_length=50, verbose_name='ФИО')
    phone = models.IntegerField(verbose_name='Телефон')
    adress = models.CharField(max_length=50, verbose_name='Адрес')
    id_num = models.IntegerField(verbose_name='ИНН')
    date = models.DateField(auto_now=True)

    

    def __str__(self):
        return self.name


class Admin(models.Model):
    login = models.CharField(max_length=12, verbose_name='Логин')
    password = models.CharField(max_length=12, verbose_name='Пароль')
    isLogin = models.BooleanField(default=False)

    def __str__(self):
        return self.login
