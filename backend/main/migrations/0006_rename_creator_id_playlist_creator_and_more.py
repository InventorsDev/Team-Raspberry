# Generated by Django 4.2.2 on 2023-07-11 11:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_rename_creator_playlist_creator_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='playlist',
            old_name='creator_id',
            new_name='creator',
        ),
        migrations.RenameField(
            model_name='video',
            old_name='creator_id',
            new_name='creator',
        ),
    ]
