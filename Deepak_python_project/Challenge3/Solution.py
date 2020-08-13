def soldier(path,dictonary):
    import os
    os.chdir(path,dictonary)
    num = 1
    for files in os.listdir(path):
        if files.endswith(f".{jpg}"):
            os.rename(files, f"{num}.{jpg}")
            num += 1
        if os.path.files in (dictonary):
            pass
        else:
            files.capitalize()

if __name__ == "__main__":
    print("\n *** OH soldier prettify my folder if you want to prettify then follow the instructions below ***")
    path = input(" *** enter the full path of your directory ***")
    dictonary = input(" *** enter the path of dictonary ***")
    soldier(path,dictonary)

