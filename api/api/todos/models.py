from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(default='', blank=True)
    completed = models.BooleanField(default=False)
    added_at = models.DateTimeField(auto_now_add=True, editable=False)
    completed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['added_at']

    def __str__(self):
        return self.title

