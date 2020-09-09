import random
import string


def unique(item_list):
    unique_list = []
    for item in item_list:
        if item not in unique_list:
            unique_list.append(item)
    return unique_list

def get_random_str(n):
    chars = string.ascii_lowercase + string.digits
    return ''.join(random.choice(chars) for i in range(n))
