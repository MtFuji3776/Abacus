module ThermiteTut where

import Thermite as T

import React as R
import React.Dom as RD
import React.Dom.Props as RP
import ReactDOM as RDOM

data Action = Increment | Decremenct

type State = {counter :: Int}

initialState :: State
initialState = {counter : 0}

render :: T.Render State _ Action
render dispatch _ state _ = 
    [R.p'[ R.text "Value: "
         , R.text $ show state.counter
         ]
    ,R.p' [ R.button [ RP.onClick \_ -> dispatch Increment ]
                     [ R.text "Increment" ]
          , R.button [ RP.onClick \_ -> dispatch Decrement ]
                     [ R.text "Decrement"]
          ]
    ]

performAction :: T.PerformAction State _ Action
performAction Increment _ _  = void (T.cotransform (\state -> {counter : state.counter + 1}))
performAction Decremenct _ _ = void (T.cotransform (\state -> {counter : state.counter -1})) 

getIncrementValueFromServer :: Aff Int

performAction :: T.PerformAction State _ Action
performAction Increment _ _ = do
  Just amount <- lift getIncrementValueFromServer
  void $ T.cotransform $ \state -> state {counter = state.counter + amount}

spec :: T.Spec State (T.WithChildren ()) Action
spec = T.Spec {performAction, render}
