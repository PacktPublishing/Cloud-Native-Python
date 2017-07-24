#!/usr/bin/python

from aggregate import Aggregate
from errors import InvalidOperationError
from events import *

class userdetails(Aggregate):
   def __init__(self, id = None, name = '””, password = “”, emailid = “” ):
       Aggregate.__init__(self)
       self._apply_changes(Userdetails(id, name, password, emailid))

  def userRegister(self, userdetails):
       userdetails = {1, “robin99”, “xxxxxx”, “robinatkevin@gmail.com” }
       self._apply_changes(UserRegisterevent(userdetails))


   def updatePassword(self, count):
      password = “”
       self._apply_changes(UserPasswordEvent(password))
