def get_data():
    
    with open("names.txt") as f:

        names = f.read()

        names = names.split("\n")

        return names