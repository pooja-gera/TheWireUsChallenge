import wikipediaapi

wikipedia_en = wikipediaapi.Wikipedia('en')

page = wikipedia_en.page('Python_(programming_language)')
print(page.summary)
