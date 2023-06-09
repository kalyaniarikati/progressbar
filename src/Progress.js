
const Progress = () =>
{
    return (
    <div>
    <h3>Dynamic Progress Bar</h3>
    <p>Running progress bar from 0% to 100% in 10 seconds</p>
    <div class="progress">
        <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
            <span id="current-progress"></span>
        </div>
    </div>
    </div>
    )
}

export default Progress