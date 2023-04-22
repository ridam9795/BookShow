# Generated by Django 4.2 on 2023-04-20 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('desc', models.TextField()),
                ('language', models.CharField(choices=[('Hindi', 'Hindi'), ('English', 'English'), ('Kannada', 'Kannada'), ('Bengali', 'Bengali'), ('Marathi', 'Marathi'), ('Tamil', 'Tamil')], max_length=128)),
                ('image', models.ImageField(default=None, null=True, upload_to='events')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RenameField(
            model_name='movie',
            old_name='movieImage',
            new_name='image',
        ),
    ]