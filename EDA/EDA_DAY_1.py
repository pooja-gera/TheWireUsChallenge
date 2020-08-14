#!/usr/bin/env python
# coding: utf-8

# In[17]:


#libraries we need to perform the challenges
import pandas as pd
import numpy as np
# visualization
import seaborn as sns
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')


# In[18]:


titanic = pd.read_csv("titanic.csv")


# In[19]:


titanic.head()


# In[20]:


#determine the shape of your dataset
titanic.shape


# In[21]:


# command to drop any duplicate values in the dataset


# In[22]:


titanic.drop_duplicates(inplace=True)


# In[23]:


titanic.shape  #no duplicates are present in the given dataset


# In[24]:


#selecting few rows to print this is know as slicing
titanic[0:10]


# In[25]:


#another method to do slicing
titanic.head(20)


# 

# In[ ]:





# In[26]:


#code to drop a paticular column in the dataset
titanic.drop('Parch',axis=1,inplace=True)


# In[27]:


titanic.head() #column is dropped 


# In[28]:


#now determining the shape of the dataset
titanic.shape


# In[29]:


#code to calculate the mean of passengers who survived according to the sex 
titanic[["Sex", "Survived"]].groupby(['Sex'], as_index=False).mean().sort_values(by='Survived', ascending=False)
#similarly one can calculate the mean values of different columns for analysing the data


# In[30]:


#code to plot a hisogram based on the survival 
g = sns.FacetGrid(titanic, col='Survived')
g.map(plt.hist, 'Age', bins=20)


# In[ ]:




