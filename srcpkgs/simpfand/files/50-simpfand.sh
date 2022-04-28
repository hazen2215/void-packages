#!/bin/sh
[ -s /var/service/simpfand/supervise/pid ] && exec sv restart simpfand
