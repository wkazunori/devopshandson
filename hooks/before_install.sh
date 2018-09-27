#!/usr/bin/env bash
 
app_src_path="/usr/src/app"
app_log_path="/var/log/app"
 
rm -r /usr/src/app
rm -r /var/log/app

mkdir "$app_src_path" "$app_log_path"