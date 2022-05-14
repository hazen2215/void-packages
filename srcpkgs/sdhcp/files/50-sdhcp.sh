#!/bin/sh
chpst -b sdhcp sv status >/dev/null && exec sv restart sdhcp
