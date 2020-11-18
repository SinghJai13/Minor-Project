import sys
import os
import glob
from shutil import copyfile
print('First param:'+sys.argv[1]+'#')
print('second param:'+sys.argv[2]+'#')
print('third param:'+sys.argv[3]+'#')

# os.mkdir('hellosss')
direc = './Face_model/test/'

age = sys.argv[1]
gender = sys.argv[2]
og_name = sys.argv[3]
num = 2341554
fname = direc + str(age) + '_' + str(gender) + '_' + str(num) + '.jpg'
print(fname)
file_names =glob.glob(direc + '*.jpg')
print(file_names)


for f in file_names:
    os.remove(f)
if os.path.isfile(fname):
    print("trueeeeeeeeeeeeeeeeeeeeeeeeee")
    os.remove(fname)

print(direc+og_name)
os.rename(direc+og_name,fname)

for i in range(0,9):
    num=num+1
    dname = direc + str(age) + '_' + str(gender) + '_' + str(num) + '.jpg'
    copyfile(fname,dname)