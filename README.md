Types of errors with examples:

1. __User interface bugs__
  - Misleading or missing information in the UI
  - Poor responsiveness

2. __Logic and arithmetic bugs__
  - Bad logic or arithmetic
  - Rounding errors; overflow or underflow; incorrect data conversions
  - Outdated constants
  - Infinite loops or recursions; off by one errors; failure to re-initialize a pointer

3. __Resource bugs__
  - Incorrect initialization
  - Null arrow dereference
  - Access violations
  - Resource leaks
  - Buffer overflow

4. __Control flow errors__
  - Wrong returning state assumed
  - Mishandling exceptions or errors
  - Missing or incorrect defaults
  - Data type errors

5. __Load conditions__
  - Required resources are not available
  - Low priority tasks not put off
  - Doesn't erase old files from mass storage
  - Doesn't return unused memory

6. __Interfacing errors__
  - Incorrect API usage
  - Incorrect protocol implementation
  - Incorrect hardware handling
  - Incorrect assumptions of a particular platform
  - Incompatible systems

7. __Multi-threading bugs__
  - Deadlock
  - Race conditions
  - Time-of-check-to-time-of-use (TOCTOU) issues

8. __Other issues__
  - Unpropagated updates
  - Comments out of date or incorrect
  - Differences between documentation and product
  - Blocked because of dependencies on other teams
  - Blocked because server crashed
  - Blocked because of some unbalance in the universe idk

9 is a "miscellaneous" day, in which I'm occupied with a non-coding task, like going through training, sitting in meetings, etc. For me, even tech design falls under this umbrella because it often involves seeking advice from more experienced engineers, which is technically talking and not coding.

0 is an "off" day, e.g. for weekends and holidays.

I've had days where I'd be debugging, say, a synchronization issue, only to cause a null pointer bug myself. Then I'd be forced to figure out where in the code I went wrong. It's silly, but it happens.