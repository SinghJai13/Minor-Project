import sys

# print('hello guys!!')
print('First param:'+sys.argv[1]+'#')
print('second param:'+sys.argv[2]+'#')
print('third param:'+sys.argv[3]+'#')
print(type(sys.argv[3]))

import os

direc = './uploads/'
x = os.listdir(direc)
# og_name = fieldname
og_name = x[2]
age = 11
gender = 0

fname = direc + str(age) + '_' + str(gender) + '_' + '2341554' + '.jpg'
if os.path.isfile(direc + fname)
    os.remove(direc + fname)
os.rename(direc+og_name,fname)