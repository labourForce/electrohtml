#!/bin/bash
sudo putty -ssh -P 22 192.168.1.207 -l root -pw aA11111111 -m deploy.sh
#sudo putty -ssh -P 45222 87.252.252.62 -l root -pw aA11111111 -m deploy.sh
echo "done"