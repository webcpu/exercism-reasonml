#!/usr/local/bin/python3
import os
import subprocess
import json
from os.path import expanduser

home  = expanduser("~")
track = 'reasonml'

projects = ['protein-translation', 'armstrong-numbers', 'change', 'rna-transcription', 'space-age', 'bob', 'anagram', 'accumulate', 'run-length-encoding', 'minesweeper', 'hello-world', 'leap', 'isogram', 'raindrops', 'acronym', 'word-count', 'allergies', 'all-your-base', 'pangram', 'binary-search']

def download(project, track, dir):
    command = ["/usr/local/bin/exercism", "download", "--exercise="+project, "--track="+track]
    p = subprocess.Popen(command, cwd=dir)
    p.wait()

def downloadall(projects, track):
    root = exercismhome()
    projectdir = lambda project: os.path.join(root, track, project)
    for project in projects:
        download(project, track, projectdir(project))

def install(dir):
    p = subprocess.Popen(["/usr/local/bin/npm", "install"], cwd=dir)
    p.wait()

def installall(dirs):
    for dir in dirs:
        print(dir)
        install(dir)

def exercismhome():
    config = os.path.join(home, ".exercism.json")
    with open(config) as f:
        data = json.load(f)
    return data["dir"]

def projectdirs(track):
    root = exercismhome()
    return list(map(lambda project: os.path.join(root, track, project), projects))

print("exercism home: " + exercismhome())
print("projects: ")
print(projects)
downloadall(projects, track)
installall(projectdirs(track));
