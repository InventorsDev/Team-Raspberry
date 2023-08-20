# Generated by Django 4.2.2 on 2023-07-01 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('book_file', models.FileField(upload_to='books/file/')),
                ('book_cover_photo', models.ImageField(blank=True, null=True, upload_to='books/cover_photo')),
            ],
        ),
        migrations.AlterField(
            model_name='video',
            name='video_file',
            field=models.FileField(upload_to='videos/file/'),
        ),
    ]