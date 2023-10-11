export function aggregateMetrics(...metrics) {
  const result = {};
  for(let i = 0; i < metrics.length; i++){
    const singleMetricsRecord = metrics[i];
    for(const metricName in singleMetricsRecord){
      const singleMetric = singleMetricsRecord[metricName];
      if (result[metricName] === undefined) {
        result[metricName] = singleMetric;
        continue;
      }
      const resultMetric = result[metricName];
      if (resultMetric.max < singleMetric.max) {
        resultMetric.max = singleMetric.max;
      }
      if (resultMetric.min > singleMetric.min) {
        resultMetric.min = singleMetric.min;
      }
      resultMetric.avg = (resultMetric.avg * resultMetric.datapoints + singleMetric.avg * singleMetric.datapoints) / (singleMetric.datapoints + resultMetric.datapoints);
      resultMetric.datapoints += singleMetric.datapoints;
    }
  }
  return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9hbmVncmVsL2NvZGUvamF2YXNjcmlwdC9kZW5vbG9hZC9zcmMvbWV0cmljcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFBlcmZvcm1hbmNlTWV0cmljIHtcbiAgZGF0YXBvaW50czogbnVtYmVyO1xuICBtaW46IG51bWJlcjtcbiAgYXZnOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWdncmVnYXRlTWV0cmljcyhcbiAgLi4ubWV0cmljczogUmVjb3JkPHN0cmluZywgUGVyZm9ybWFuY2VNZXRyaWM+W11cbik6IFJlY29yZDxzdHJpbmcsIFBlcmZvcm1hbmNlTWV0cmljPiB7XG4gIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgUGVyZm9ybWFuY2VNZXRyaWM+ID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRyaWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2luZ2xlTWV0cmljc1JlY29yZCA9IG1ldHJpY3NbaV07XG5cbiAgICBmb3IgKGNvbnN0IG1ldHJpY05hbWUgaW4gc2luZ2xlTWV0cmljc1JlY29yZCkge1xuICAgICAgY29uc3Qgc2luZ2xlTWV0cmljID0gc2luZ2xlTWV0cmljc1JlY29yZFttZXRyaWNOYW1lXTtcbiAgICAgIGlmIChyZXN1bHRbbWV0cmljTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHRbbWV0cmljTmFtZV0gPSBzaW5nbGVNZXRyaWM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0TWV0cmljID0gcmVzdWx0W21ldHJpY05hbWVdO1xuXG4gICAgICBpZiAocmVzdWx0TWV0cmljLm1heCA8IHNpbmdsZU1ldHJpYy5tYXgpIHtcbiAgICAgICAgcmVzdWx0TWV0cmljLm1heCA9IHNpbmdsZU1ldHJpYy5tYXg7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0TWV0cmljLm1pbiA+IHNpbmdsZU1ldHJpYy5taW4pIHtcbiAgICAgICAgcmVzdWx0TWV0cmljLm1pbiA9IHNpbmdsZU1ldHJpYy5taW47XG4gICAgICB9XG4gICAgICByZXN1bHRNZXRyaWMuYXZnID0gKHJlc3VsdE1ldHJpYy5hdmcgKiByZXN1bHRNZXRyaWMuZGF0YXBvaW50cyArXG4gICAgICAgIHNpbmdsZU1ldHJpYy5hdmcgKiBzaW5nbGVNZXRyaWMuZGF0YXBvaW50cykgL1xuICAgICAgICAoc2luZ2xlTWV0cmljLmRhdGFwb2ludHMgKyByZXN1bHRNZXRyaWMuZGF0YXBvaW50cyk7XG4gICAgICByZXN1bHRNZXRyaWMuZGF0YXBvaW50cyArPSBzaW5nbGVNZXRyaWMuZGF0YXBvaW50cztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sU0FBUyxpQkFDZCxHQUFHLE9BQTRDO0VBRS9DLE1BQU0sU0FBNEMsQ0FBQztFQUVuRCxJQUFLLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxNQUFNLEVBQUUsSUFBSztJQUN2QyxNQUFNLHNCQUFzQixPQUFPLENBQUMsRUFBRTtJQUV0QyxJQUFLLE1BQU0sY0FBYyxvQkFBcUI7TUFDNUMsTUFBTSxlQUFlLG1CQUFtQixDQUFDLFdBQVc7TUFDcEQsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFdBQVc7UUFDcEMsTUFBTSxDQUFDLFdBQVcsR0FBRztRQUNyQjtNQUNGO01BQ0EsTUFBTSxlQUFlLE1BQU0sQ0FBQyxXQUFXO01BRXZDLElBQUksYUFBYSxHQUFHLEdBQUcsYUFBYSxHQUFHLEVBQUU7UUFDdkMsYUFBYSxHQUFHLEdBQUcsYUFBYSxHQUFHO01BQ3JDO01BQ0EsSUFBSSxhQUFhLEdBQUcsR0FBRyxhQUFhLEdBQUcsRUFBRTtRQUN2QyxhQUFhLEdBQUcsR0FBRyxhQUFhLEdBQUc7TUFDckM7TUFDQSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLGFBQWEsVUFBVSxHQUM1RCxhQUFhLEdBQUcsR0FBRyxhQUFhLFVBQVUsSUFDMUMsQ0FBQyxhQUFhLFVBQVUsR0FBRyxhQUFhLFVBQVU7TUFDcEQsYUFBYSxVQUFVLElBQUksYUFBYSxVQUFVO0lBQ3BEO0VBQ0Y7RUFFQSxPQUFPO0FBQ1QifQ==