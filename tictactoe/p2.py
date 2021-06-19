from tictactoe.o import O
from tictactoe.player import Player


class P2(Player):
    def __init__(self):
        super().__init__()
        self.o = O()
