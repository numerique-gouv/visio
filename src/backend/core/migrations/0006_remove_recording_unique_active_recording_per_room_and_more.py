# Generated by Django 5.1.1 on 2024-10-31 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_user_language_recording'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='recording',
            name='unique_active_recording_per_room',
        ),
        migrations.AlterField(
            model_name='recording',
            name='mode',
            field=models.CharField(choices=[('screen_recording', 'SCREEN_RECORDING'), ('transcript', 'TRANSCRIPT')], help_text='Defines the kind of worker being called.', max_length=20, verbose_name='Worker kind'),
        ),
        migrations.AlterField(
            model_name='recording',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('initiated', 'Initiated'), ('stopped', 'Stopped'), ('aborted', 'Aborted'), ('saved', 'Saved'), ('failed_to_start', 'Failed to Start'), ('failed_to_stop', 'Failed to Stop')], default='initiated', max_length=20),
        ),
        migrations.AlterField(
            model_name='user',
            name='language',
            field=models.CharField(choices="(('en-us', 'English'), ('fr-fr', 'French'))", default='en-us', help_text='The language in which the user wants to see the interface.', max_length=10, verbose_name='language'),
        ),
        migrations.AddConstraint(
            model_name='recording',
            constraint=models.UniqueConstraint(condition=models.Q(('status', 'active'), ('status', 'initiated'), _connector='OR'), fields=('room',), name='unique_initiated_or_active_recording_per_room'),
        ),
    ]