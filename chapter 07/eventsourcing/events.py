class UserRegisterEvent(object):
   def apply_changes(self, userdetails):
       id = userdetails.id
       name = userdetails.name
       password = userdetails.password
       emailid = userdetails.emailid

class UserPasswordEvent(object):
   def __init__(self, password):
       self.password = password

   def apply_changes(password):
       user.password = password
