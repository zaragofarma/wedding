#!/bin/bash
# Generacion de carpetas
# Ajuste Trucks 2018-10-06   - V0.0.1
#------------------------------------------------------------------
#-PEndiente de depurar pues copia la carpeta a todas las subcarpetas

RES_BASE=$1
RES_BASE=4128x3096

res="512x682 1024x1366 317x423 320x180 480x270 634x846 768x432 1024x576 1366x768 1920x1080 1280x720 2560x1440 3840x2160 1600x1200 2048x1152"
res="${res} 114x152 228x296 92x123 184x245 250x200 300x250"

#193x145 386x290 153x115 306x230 1600x1200
#317x423  909x682 564x423 1128x846  "

for j in ${res}  ; do
hor=$(echo $j | cut -d "x" -f1)
ver=$(echo $j | cut -d "x" -f2)
hor2=$hor
ver2=$ver
if [ ${#hor} -eq 3 ] ; then hor2="0${hor}" ; fi
if [ ${#ver} -eq 3 ] ; then ver2="0${ver}" ; fi
if [ ${#hor} -eq 2 ] ; then hor2="00${hor}" ; fi
if [ ${#ver} -eq 2 ] ; then ver2="00${ver}" ; fi
echo "$hor - $ver"
res2="${hor2}x${ver2}"

if [ -d "${res2}" ] ; then
echo "Folder ${res2} exist"
else
cp -Rf ${RES_BASE} $res2
fi

cd $res2
for i in $(find . -type f ); do echo $i ;  rename "s/${RES_BASE}/${res2}/g" $i ; done
for i in $(find . -type f ); do echo $i ;  convert -resize "x$ver" $i $i ; done
for i in $(find . -type f ); do echo $i ;  convert -resize "$hor" $i $i ; done
for i in $(find . -type f ); do echo $i ;  convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85%  $i $i ; done
cd ..
done


