
#API key - f1270e2114ffdb8e962f7d2414d74bd3




import unittest
from a1 import *
import urllib.request




#test cases

api_key='f1270e2114ffdb8e962f7d2414d74bd3'


json_delhi=str(urllib.request.urlopen('http://api.openweathermap.org/data/2.5/forecast?q=Delhi&APPID=f1270e2114ffdb8e962f7d2414d74bd3').read())



# TEST cases should cover the different boundary cases.
class testpoint(unittest.TestCase):
	
                                         
                def test_has_error(self):
                        self.assertTrue(has_error('NewDelhi',json_delhi))
                        self.assertTrue(has_error('Lonavala',json_delhi))
                        self.assertTrue(has_error('Jaipur',json_delhi))
                        self.assertTrue(has_error('Kerela',json_delhi))
                        self.assertTrue(has_error('Jammu',json_delhi))

                                                  
                def test_get_temperature(self):
                        self.assertAlmostEqual(get_temperature(json_delhi,0,'15'),301.68,delta=5)
                        self.assertAlmostEqual(get_temperature(json_delhi,1,'18:00'),300.32,delta=5)
                        self.assertAlmostEqual(get_temperature(json_delhi,2,'09:00'),301.98,delta=5)
                        self.assertAlmostEqual(get_temperature(json_delhi,3,'00'),297.56,delta=5)
                        self.assertAlmostEqual(get_temperature(json_delhi,4,'21'),297.86,delta=5)
                                               
                def test_get_humidity(self):
                        self.assertAlmostEqual(get_humidity(json_delhi,0,'15'),82,delta=5)
                        self.assertAlmostEqual(get_humidity(json_delhi,1,'18:00'),82,delta=5)
                        self.assertAlmostEqual(get_humidity(json_delhi,2,'09:00'),75,delta=5)
                        self.assertAlmostEqual(get_humidity(json_delhi,3,'00'),99,delta=5)
                        self.assertAlmostEqual(get_humidity(json_delhi,4,'21'),93,delta=5)
                            
                def test_get_pressure(self):
                        self.assertAlmostEqual(get_pressure(json_delhi,0,'15'),992.86,delta=5)
                        self.assertAlmostEqual(get_pressure(json_delhi,1,'18:00'),996.31,delta=5)
                        self.assertAlmostEqual(get_pressure(json_delhi,2,'09:00'),996.67,delta=5)
                        self.assertAlmostEqual(get_pressure(json_delhi,3,'00'),995.87,delta=5)
                        self.assertAlmostEqual(get_pressure(json_delhi,4,'21'),992.06,delta=5)
                            
                def test_get_wind(self):
                        self.assertAlmostEqual(get_wind(json_delhi,0,'15'),3.86,delta=5)
                        self.assertAlmostEqual(get_wind(json_delhi,1,'18:00'),3.93,delta=5)
                        self.assertAlmostEqual(get_wind(json_delhi,2,'09:00'),3.22,delta=5)
                        self.assertAlmostEqual(get_wind(json_delhi,3,'00'),1.96,delta=5)
                        self.assertAlmostEqual(get_wind(json_delhi,4,'21'),1.31,delta=5)
                        
                def test_get_sealevel(self):
                       self.assertAlmostEqual(get_sealevel(json_delhi,0,'15'),1017.16,delta=5)
                       self.assertAlmostEqual(get_sealevel(json_delhi,1,'18:00'),1020.78,delta=5)
                       self.assertAlmostEqual(get_sealevel(json_delhi,2,'09:00'),1021.08,delta=5)
                       self.assertAlmostEqual(get_sealevel(json_delhi,3,'00'),1020.55,delta=5)
                       self.assertAlmostEqual(get_sealevel(json_delhi,4,'21'),1016.71,delta=5)

if __name__=='__main__':
	unittest.main()

