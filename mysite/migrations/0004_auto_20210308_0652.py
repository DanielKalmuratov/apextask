# Generated by Django 3.1.7 on 2021-03-08 00:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0003_admin_islogin'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='People',
        ),
    ]
