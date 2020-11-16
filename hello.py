import sys
import os

print('First param:'+sys.argv[1]+'#')
print('second param:'+sys.argv[2]+'#')
print('third param:'+sys.argv[3]+'#')

# os.mkdir('hellosss')
direc = './uploads/'

age = sys.argv[1]
gender = sys.argv[2]
og_name = sys.argv[3]

fname = direc + str(age) + '_' + str(gender) + '_' + '2341554' + '.jpg'
if os.path.isfile(fname):
    print("trueeeeeeeeeeeeeeeeeeeeeeeeee")
    os.remove(fname)
print(direc+og_name)
os.rename(direc+og_name,fname)