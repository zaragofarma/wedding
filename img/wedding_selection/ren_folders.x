#!/bin/bash
# Generacion de carpetas

RES_BASE=$1
RES_BASE=1818x1364

if [ "${RES_BASE}" == "" ] ; then
RES_BASE=2048x1536
fi

res="512x682 1024x1366 317x423 634x846 909x682 1818x846 564x423 1128x846 114x152 228x296 92x123 184x245 193x145 386x290 153x115 306x230"

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

cd $res2

for i in $(find . -type f ); do rename "s/${RES_BASE}/${res2}/g" $i ; done
cd ..
done


