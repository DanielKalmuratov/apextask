# Generated by Django 3.1.7 on 2021-03-07 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_user_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='admin',
            name='isLogin',
            field=models.BooleanField(default=False),
        ),
    ]
