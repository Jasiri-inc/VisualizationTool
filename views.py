from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

def api(request):
    data = [
        {
            "id": 1,
            "source": "source_table_1",
            "destination": "destination_table_1",
            "metadata": {
                "variable_name": "variable_name_1",
                "variable_type": "variable_type_1",
                "variable_description": "variable_description_1"
            }
        },
        {
            "id": 2,
            "source": "source_table_2",
            "destination": "destination_table_2",
            "metadata": {
                "variable_name": "variable_name_2",
                "variable_type": "variable_type_2",
                "variable_description": "variable_description_2"
            }
        }
    ]
    return JsonResponse(data, safe=False)
