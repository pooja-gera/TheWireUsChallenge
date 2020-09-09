import pandas as pd
from datetime import *

data = pd.read_csv(r"//////////////////////////////////PATH OF THE FILE final.csv/////////////////////////////////")

# sorting data frame by Team and then By names
data.sort_values(["Subject", "Date"], axis=0,
                 ascending=True, inplace=True)
p = 0
a = 0
total = 0
attpercent = {}
temp = ""
data = data.infer_objects()
data = data.drop_duplicates()

data = data.groupby(['Subject', 'Attend', 'Date']).size().reset_index() \
       .set_index(['Subject','Attend', 'Date']) \
        .unstack(1).fillna(0).astype(int)
data.columns = data.columns.droplevel(0)
data['Attendance'] = data['Present'] * 100 / ( data['Present'] + data['Absent'])
print(data)

# for index, row in data.iterrows():
#     if (temp == ""):
#         temp = row["Subject"]
#         if row["Attend"] == "Present":
#             p = p + 1
#         else:
#             a = a + 1
#     else:
#         if (temp == row["Subject"]):
#             if row["Attend"] == "Present":
#                 p = p + 1
#             else:
#                 a = a + 1
#         else:
#             total = a + p
#             attpercent[temp] = (p * 100) / total
#             a = 0
#             p = 0
#             temp = row["Subject"]
#             if row["Attend"] == "Present":
#                 p = p + 1
#             else:
#                 a = a + 1
#
# print(attpercent)
