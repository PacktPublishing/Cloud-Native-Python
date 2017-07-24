from commands import *

class UserCommandsHandler(object):
   def __init__(self, user_repository):
       self.user_repository = user_repository

   def handle(self, command):
       if command.__class__ == UserRegisterEvent:
           self.user_repository.save(commands.userRegister(command.id, command.name, command.password, command.emailid))
       if command.__class__ == UpdatePasswordEvent:
           with self._user_(commands.updatePassword(self.id, command.password, command.original_version) as user:
               user.update(command.password)
@contextmanager
   def _user(self, id, user_version):
       user = self.user_repository.find_by_id(id)
       yield user
       self.user.save(password, user_version)
