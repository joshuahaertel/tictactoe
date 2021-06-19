from tictactoe.player import Player
from tictactoe.x import X


class P1(Player):
    def __init__(self):
        super().__init__()
        self.x = X()
