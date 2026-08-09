import "./CalendarCard.css";

export default function CalendarCard() {
    return (
        <div className="calendar-card">

            <div className="calendar-title">
                <h3>Calendar</h3>
            </div>

            <div className="calendar-navigation">
                <button className="calendar-arrow">←</button>

                <h4>September 2026</h4>

                <button className="calendar-arrow">→</button>
            </div>

            <div className="calendar-weekdays">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>

            <div className="calendar-days">

                <span className="inactive-day">26</span>
                <span className="inactive-day">27</span>
                <span className="inactive-day">28</span>
                <span className="inactive-day">29</span>
                <span className="inactive-day">30</span>

                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>

                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>

                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>

                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>

                <span className="active-day">26</span>

                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>

                <span className="inactive-day">1</span>
                <span className="inactive-day">2</span>
                <span className="inactive-day">3</span>
                <span className="inactive-day">4</span>
                <span className="inactive-day">5</span>
                <span className="inactive-day">6</span>

            </div>

        </div>
    );
}