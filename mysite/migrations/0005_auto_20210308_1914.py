# Generated by Django 3.1.7 on 2021-03-08 13:14

from django.db import migrations
import hashid_field.field


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0004_auto_20210308_0652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='people',
            name='id_num',
            field=hashid_field.field.HashidField(alphabet='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', min_length=7),
        ),
    ]