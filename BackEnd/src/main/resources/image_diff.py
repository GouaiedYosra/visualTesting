# USAGE
#  python image_diff.py --first images/original_02.png --second images/modified_02.png
# import the necessary packages
from skimage.measure import compare_ssim
import argparse
import imutils
import cv2
import matplotlib.image as mpimg 
import matplotlib.pyplot as plt
from PIL import Image
# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-f", "--first", required=True,
	help="first input image")
ap.add_argument("-s", "--second", required=True,
	help="second")
args = vars(ap.parse_args())
# load the two input images
imageA = cv2.imread(args["first"])
imageB = cv2.imread(args["second"])
#resize the two images
scale=1
width = int(imageA.shape[1]*scale)
height=int(imageA.shape[0]*scale)
print(width)
print(height)
dimension=(width,height)
imageB1=cv2.resize(imageB,dimension,interpolation=cv2.INTER_AREA)
# convert the images to grayscale
grayA = cv2.cvtColor(imageA, cv2.COLOR_BGR2GRAY)
grayB = cv2.cvtColor(imageB1, cv2.COLOR_BGR2GRAY)
# compute the Structural Similarity Index (SSIM) between the two
# images, ensuring that the difference image is returned
(score, diff) = compare_ssim(grayA, grayB, full=True)
diff = (diff * 255).astype("uint8")
print("SSIM: {}".format(score))
# threshold the difference image, followed by finding contours to
# obtain the regions of the two input images that differ
thresh = cv2.threshold(diff, 0, 255,
	cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,
	cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
# loop over the contours
for c in cnts:
	# compute the bounding box of the contour and then draw the
	# bounding box on both input images to represent where the two
	# images differ
	(x, y, w, h) = cv2.boundingRect(c)
	cv2.rectangle(imageA, (x, y), (x + w, y + h), (0, 0, 255), 2)

#C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo/screenshots/Chrome/imageBaseline/google1000x1000.png
#C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo/screenshots/Chrome/imageCheckpoint/google1000x1000.png
# show the output images
cv2.imwrite('C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/baseline.jpg', imageA)
cv2.imwrite('C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/checkpoint.jpg', imageB)
cv2.imwrite('C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/diff.png', diff)