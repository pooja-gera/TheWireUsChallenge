#!/usr/bin/env python
# coding: utf-8

# Hi fellow learner! Welcome to Day 1 of your journey to becoming a *dun dun dun* kickass data scientist. Here you'll learn almost about *everything* there is to know about how to handle boring data files and convert it into data that's not really boring anymore. You'll learn how to handle data and be able to apply various visualisation techniques (basically a fancy way of saying you'll be making pretty graphs)to your data. Although there ain't many prerequisites to this challenge, we would appreciate it if you have some prior knowledge of python. I have bored you guys enough with the speech i prepared, so let's just jump into, *drum noises intensify* The WireUs Data exploration and Visualisation Challenge. 

# # Exploratory Data Analysis:
# 
# 
# Exploratory data analysis is an approach to analyzing data sets by summarizing their main characteristics with visualizations. The EDA process is a crucial step prior to building a model in order to unravel various insights that later become important in developing a robust algorithmic model.
# 
# 
# Let’s try to break down this definition and understand different operations where EDA comes into play:
# 
#  - First and foremost, EDA provides a stage for breaking down problem statements into smaller experiments which can help understand the dataset
#  
#  - EDA provides relevant insights which help analysts make key business decisions
#  
#  - The EDA step provides a platform to run all thought experiments and ultimately guides us towards making a critical decision
#  
#  - Read and examine a dataset and classify variables by their type:
#  
#    - quantitative vs. categorical
#    
#  - Handle categorical variables with numerically coded values
#  
#  - Perform univariate and bivariate analysis and derive meaningful insights about the dataset
#  
#  - Identify and treat missing values and remove dataset outliers
#  
#  - Build a correlation matrix to identify relevant variables

# In[23]:


import warnings
warnings.filterwarnings('ignore')
# to do any of the good stuff we want to do with our data, 
#we need to import a few important libraries.
import numpy as np
import pandas as pd

#handy little trick for you guys, 
#keyboard shortcut to run a cell is shift + enter


# In[24]:


#let's add our data! for that we're going to be using pandas
df = pd.read_csv('/Users/shrutayyyy_/Desktop/Building_Permits.csv')
#to get the first 5 rows of our data, 
#we use a function called head()
df.head()


# There we go! We have successfully imported our data!

# A very important part of a data scientist's job is to study and analyse the data given to them. As this excercise pertains to data cleaning, we'll try to learn about that aspect of our data set. Data cleaning basically refers to either getting rid of or replacing null values. Many times the size of the data we have is huge, so a lot of data is either missing because it was not recorded or it might be 0. As a data scientist it's our job to figure out what works better for our data. Firstly, we'll figure out how many null values are contained in our dataset.

# In[25]:


missing_values_count = df.isnull().sum()
missing_values_count


# Yikes, that seems like a lot! It might be helpful to see what percentage of the values in our dataset were missing to give us a better sense of the scale of this problem:

# In[26]:


# how many total missing values do we have?
total_cells = np.product(df.shape)
total_missing = missing_values_count.sum()

# percent of data that is missing
(total_missing/total_cells) * 100


# Wow, more than a quarter of the cells in this dataset are empty! In the next step, we're going to take a closer look at some of the columns with missing values and try to figure out what might be going on with them.

# As a data scientist, you need to study your data. A lot. And that also means figuring out why the null values exist in our data. When we study data, there tends to be human error, and in the future we will be dropping a lot of values and data from our data set to get rid of null values, which could end up with loss of valuable data. 

# If you're in a hurry or don't have a reason to figure out why your values are missing, one option you have is to just remove any rows or columns that contain missing values. (Note: I don't generally recommend this approch for important projects! It's usually worth it to take the time to go through your data and really look at all the columns with missing values one-by-one to really get to know your dataset.)
# 
# If you're sure you want to drop rows with missing values, pandas does have a handy function, dropna() to help you do this.

# In[27]:


df.dropna()


# And that my friends, is exactly what i meant by human error. We have removed all our data by trying to remove all rows which contain a null value ( which happened to be all rows coincidentally). To counter this error, we are going to be more specific with our demands to dropna().

# In[28]:


columns_with_na_dropped = df.dropna(axis=1)
columns_with_na_dropped.head()
#axis=1 means we are dealing with columns.
#axis=0 means we are dealing with rows.


# There we go! What I have basically done here is removed null values from columns which have atleast 1 null value. Pretty savvy, eh? 

# In[29]:


# just how much data did we lose?
print("Columns in original dataset: %d \n" % df.shape[1])
print("Columns with na's dropped: %d" % columns_with_na_dropped.shape[1])


# We've lost quite a bit of data, but at this point we have successfully removed all the NaN's from our data.

# # Filling in missing values automatically
# 
# Another option is to try and fill in the missing values. 
# We can use the Panda's fillna() function to fill in missing values in a dataframe for us. One option we have is to specify what we want the NaN values to be replaced with. Here, I'm saying that I would like to replace all the NaN values with 0.

# In[32]:


# replace all NA's with 0
columns_with_na_dropped.fillna(0)


# I could also be a bit more savvy and replace missing values with whatever value comes directly after it in the same column. (This makes a lot of sense for datasets where the observations have some sort of logical order to them.)

# In[34]:


# replace all NA's the value that comes directly after it in the same column, 
# then replace all the reamining na's with 0
columns_with_na_dropped.fillna(method = 'bfill', axis=0).fillna(0)


# There can be many more creative ways to fill missing values like average, mean, standard deviation, etc and that would completely depend on the kind of data you have and what you wish to do with it. Checkout the resources to read more about this.
# 

# And that's it for the first day! This was just a reference for you as to what you actually have to do in the challenge. As you proceed further into the challenges, the explainations won't be as detailed as this, but i would get 10 times funnier as the days go by ;) Hope you stick around for that, best of luck for the challenge!

# In[ ]:




