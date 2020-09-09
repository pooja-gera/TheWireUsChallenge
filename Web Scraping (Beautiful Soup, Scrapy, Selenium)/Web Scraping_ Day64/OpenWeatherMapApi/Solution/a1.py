#API key - f1270e2114ffdb8e962f7d2414d74bd3


#importing urllib for opening site from web
import urllib.request

#to process date and time
import datetime



# function to get weather response
def weather_response(location,API_key):
    
                #api url without city and api key
                link='http://api.openweathermap.org/data/2.5/forecast?q='
                
                # full  url link with city and api key
                url=link+location+'APPID&='+API_key
                
                # to fetch availablity of location in website 
                data = urllib.request.urlopen(url).read()
                data=str(data)
                return data
                
                
                
                    
               




# function to check for valid response 
def has_error(location,json):
    
                length=len(location)
                #to find the index of name of location
                
                index=json.find('''name":''')
                
                #condition to check if location is in website or not
                if json[index+7:index+length+7:1]!=location:
                        return True
                else:
                        return False




# function to get temperature back
def get_temperature (json,n,t):
    
                #current date
                today_date = datetime.date.today()
                
                #process date (adding days to current)
                date_add=datetime.timedelta(days=n)
                req_date=today_date+date_add
                req_date=str(req_date)
                
                #final date and time
                date_time=req_date+" "+t+":00"
                
                #converting date,time to string data
                datenow=str(date_time)
                
                #to find the index of required date and time
                index=json.index(datenow)
                
                #reversing string to get required data from end
                reverse_json=json[index:0:-1]
                
                #taking index of temp in temporary(temp) index
                index_temp=reverse_json.find(''':"pmet''')
                temperature=reverse_json[index_temp-1:index_temp-7:-1]
                temperature=float(temperature)
                
                return temperature
                   
                

def get_humidity(json,n,t):
    
                #current date
                today_date = datetime.date.today()                
                #process date (adding days to current)
                
                date_add=datetime.timedelta(days=n)
                req_date=today_date+date_add
                req_date=str(req_date)
                
                #final date and time
                date_time=req_date+" "+t+":00"
                
                #converting date,time to string data
                datenow=str(date_time)
                
                #to find the index of required date and time
                index=json.index(datenow)
                
                #reversing string to get required data from end
                reverse_json=json[index:0:-1]
                
                #taking index of humidity in temporary(temp) index
                index_temp=reverse_json.find(''':"ytidimuh''')
                humidity=reverse_json[index_temp-1:index_temp-3:-1]
                humidity=float(humidity)
                
                return humidity
                


            

def get_pressure(json,n,t):
    
                #current date
                today_date = datetime.date.today()
                
                #process date (adding days to current)
                date_add=datetime.timedelta(days=n)
                req_date=today_date+date_add
                req_date=str(req_date)
                
                #final date and time
                date_time=req_date+" "+t+":00"

                #converting date,time to string data
                datenow=str(date_time)
                
                #to find the index of required date and time
                index=json.index(datenow)
                
                #reversing string to get required data from end
                reverse_json=json[index:0:-1]
                
                #taking index of pressure in temporary(temp) index
                index_temp=reverse_json.find(''':"erusserp''')
                pressure=reverse_json[index_temp-1:index_temp-6:-1]
                pressure=float(pressure)
                
                return pressure


def get_wind(json,n,t):
    
                #current date
                today_date = datetime.date.today()
                
                #process date (adding days to current)
                date_add=datetime.timedelta(days=n)
                req_date=today_date+date_add
                req_date=str(req_date)
                
                #final date and time
                date_time=req_date+" "+t+":00"
                
                #converting date,time to string data
                datenow=str(date_time)
                
                #to find the index of required date and time
                index=json.index(datenow)
                
                #reversing string to get required data from end
                reverse_json=json[index:0:-1]
                
                #index of speed as speed is one of the idendifier for wind speed in temporary(temp) index
                index_temp=reverse_json.find(''':"deeps''')
                wind=reverse_json[index_temp-1:index_temp-5:-1]
                wind=float(wind)
                
                return wind

def get_sealevel(json,n,t):
    
                #current date
                today_date = datetime.date.today()
                
                #process date (adding days to current)
                date_add=datetime.timedelta(days=n)
                req_date=today_date+date_add
                req_date=str(req_date)
                
                #final date and time
                date_time=req_date+" "+t+":00"
                
                #converting date,time to string data
                datenow=str(date_time)
                
                #to find the index of required date and time
                index=json.index(datenow)
                
                #reversing string to get required data from end
                reverse_json=json[index:0:-1]
                
                #taking index of sea level in temporary(temp) index
                index_temp=reverse_json.find(''':"level_aes''')
                sea_level=reverse_json[index_temp-1:index_temp-7:-1]
                sea_level=float(sea_level)
                
                return sea_level




