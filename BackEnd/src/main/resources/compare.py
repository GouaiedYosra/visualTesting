import cv2
import argparse
from wand.image import Image
import PythonMagick
# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-f", "--first", required=True,
	help="first input image")
ap.add_argument("-s", "--second", required=True,
	help="second")
ap.add_argument("-w", "--w", required=True)
ap.add_argument("-he", "--h", required=True)
args = vars(ap.parse_args())
imgA=cv2.imread(args["first"])
imgB=cv2.imread(args["second"])
w=int(args["w"])
h=int(args["h"])
dim=(w,h)
path1="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/imgA.png"
path2="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/imgB.png"
path3="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/diff.png"
img1=cv2.resize(imgA, dim, interpolation = cv2.INTER_AREA)
img2=cv2.resize(imgB, dim, interpolation = cv2.INTER_AREA)
cv2.imwrite(path1,img1)
cv2.imwrite(path2,img2)
A=Image(filename=path1)
B=Image(filename=path2)
B.fuzz = B.quantum_range * 0.20 
result_image, result_metric = B.compare(A)
print(result_metric)
result_image.save(filename=path3)