module ThermiteTut where

import Prelude
import Thermite as T
import Partial.Unsafe(unsafePartial)
--import Effect.Eff (Eff)
import Web.HTML (window)
import Web.HTML.Window (document)
import React as R
import React.DOM as R -- シノニムが被っても大丈夫なのか？
import React.DOM.Props as RP
import ReactDOM as RDOM

data Action = Increment | Decrement

type State = {counter :: Int}

initialState :: State
initialState = {counter : 0}

render :: T.Render State _ Action -- ここで出てくるR.~のRはReact.DOMの略称の方
render dispatch _ state _ = 
    [R.p' [ R.text "Value: "
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
performAction Decrement _ _ = void (T.cotransform (\state -> {counter : state.counter - 1})) 

-- getIncrementValueFromServer :: Aff Int

-- performAction :: T.PerformAction State _ Action
-- performAction Increment _ _ = do
--   Just amount <- lift getIncrementValueFromServer
--   void $ T.cotransform $ \state -> state {counter = state.counter + amount}

spec :: T.Spec State (T.WithChildren ()) Action
spec = T.Spec {performAction, render}

main = unsafePartial do
      let component = T.createClass spec initialState
      document <- window >>= document
      container <- fromJust <$> DOM.querySelector (DOM.QuerySelector "#container") (DOM.htmlDocumentToParentNode document)
      RDOM.render (R.createFactory component {}) container
