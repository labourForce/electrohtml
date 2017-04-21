#!/bin/bash
cd /home/usr/Documents/electrohtml
git pull origin dev
echo "pull from repo"
cp -rf knockout/dist/assets app/src/main/webapp
echo "asserts is copied"
cd app
mvn package
echo "build project with maven"
cd /apps/tomcat/webapps/
rm ROOT.war
rm -rf ROOT
echo "delete old ROOTs"
cp /home/usr/Documents/electrohtml/app/target/ROOT.war /apps/tomcat/webapps/
echo "copy new ROOT"